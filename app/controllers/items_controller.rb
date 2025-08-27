class ItemsController < ApplicationController
  def deferred
    @items = Item.all
    render inertia: "Items/DeferredProps", props: {
      items: InertiaRails.defer { @items }
    }
  end

  def merging
    @items = Item.offset(params["offset"] || 0).limit(20).order(:id)
    render inertia: "Items/MergingProps", props: {
      items: InertiaRails.merge { @items.as_json }
    }
  end

  def prefetching
    @items = Item.all
    render inertia: "Items/Prefetching", props: {
      items: @items
    }
  end
end
