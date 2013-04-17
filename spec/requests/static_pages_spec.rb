require 'spec_helper'

describe "StaticPages" do
  describe "Home Page" do
    it "should have the content 'Our Wedding" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      visit '/static_pages/home' 
      page.should have_content('Our Wedding')
    end
    it "should have the right title" do
			visit '/static_pages/home'
  		page.should have_selector('title',
                    :text => "Jamie Harrison and Lawrence Taylor | Our Wedding")
end
  end
   describe "Directions Page" do
    it "should have the content 'Directions" do
      visit '/static_pages/directions' 
      page.should have_content('Directions')
    end
  end

   describe "Registry Page" do
    it "should have the content 'Wedding Registry" do
      visit '/static_pages/registry' 
      page.should have_content('Wedding Registry')
    end
  end

   describe "Contact Page" do
    it "should have the content 'Contact Us" do
      visit '/static_pages/contact' 
      page.should have_content('Contact Us')
    end
  end

   describe "Photo Page" do
    it "should have the content 'Our Photos" do
      visit '/static_pages/photos' 
      page.should have_content('Our Photos')
    end
  end

  describe "Our Story Page" do
  	  it "should have the content 'Our Story" do
      visit '/static_pages/story' 
      page.should have_content('Our Story')
    end
  end  

end
