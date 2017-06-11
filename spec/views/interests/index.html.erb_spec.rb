require 'rails_helper'

RSpec.describe "interests/index", type: :view do
  before(:each) do
    assign(:interests, [
      Interest.create!(
        :person => nil,
        :course => nil
      ),
      Interest.create!(
        :person => nil,
        :course => nil
      )
    ])
  end

  it "renders a list of interests" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
