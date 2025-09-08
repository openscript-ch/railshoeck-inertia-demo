class ItemsController < ApplicationController
  def index
    @items = Item.all
    render inertia: "Items/Index", props: {
      title: -> { "Basic Example" },
      items:  -> { @items }
    }
  end

  def deferred
    @items = Item.all
    render inertia: "Items/DeferredProps", props: {
      title: -> { "Defered Example" },
      items: InertiaRails.defer { @items }
    }
  end

  def merging
    @items = Item.offset(params["offset"] || 0).limit(20).order(:id)
    render inertia: "Items/MergingProps", props: {
      title: -> { "Merging Example" },
      items: InertiaRails.merge { @items.as_json }
    }
  end

  def prefetching
    @items = Item.all
    render inertia: "Items/Prefetching", props: {
      title: -> { "Prefetching Example" },
      items: -> { @items }
    }
  end
end
