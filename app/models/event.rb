class Event < ApplicationRecord

  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :date, presence: true

  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?

  def summarize
    "#{title} - #{location} - #{date}"
  end
end
