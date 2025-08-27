# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  acquisition :date
#  item_type   :enum
#  name        :string
#  price       :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Item < ApplicationRecord
  validates :name, presence: true, length: { maximum: 50, too_long: "Name ist zu lang. (Maximum: 50)" }
  validates :item_type, presence: true
  validates :acquisition, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  ITEM_TYPES = %w[electronics furniture decoration].freeze
end
