class Interest < ApplicationRecord
  belongs_to :person
  belongs_to :course
  validates_uniqueness_of :course_id, :scope => :person_id
end
