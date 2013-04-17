require 'spec_helper'

describe "StaticPages" do

	let(:base_title) {"Jamie Harrison and Lawrence Taylor"}
  describe "Home Page" do
    it "should have the content 'Our Wedding" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      visit '/static_pages/home' 
      page.should have_content('Our Wedding')
    end
    it "should have the title 'Our Wedding'" do
			visit '/static_pages/home'
  		page.should have_selector('title',
                    :text => "#{base_title} | Our Wedding")
    end
  end
   describe "Directions Page" do
    it "should have the content 'Directions" do
      visit '/static_pages/directions' 
      page.should have_content('Directions')
    end

     it "should have the title 'Directions'" do
			visit '/static_pages/directions'
  		page.should have_selector('title',
                    :text => "#{base_title} | Directions")
  		end
  	end

   describe "Registry Page" do
    it "should have the content 'Wedding Registry" do
      visit '/static_pages/registry' 
      page.should have_content('Wedding Registry')
    end
    it "should have the title 'Our Wedding Registry'" do
			visit '/static_pages/registry'
  		page.should have_selector('title',
                    :text => "#{base_title} | Our Wedding Registry")
    end
  end

   describe "Contact Page" do
    it "should have the content 'Contact Us" do
      visit '/static_pages/contact' 
      page.should have_content('Contact Us')
    end
    it "should have the title 'Contact Us'" do
			visit '/static_pages/contact'
  		page.should have_selector('title',
                    :text => "#{base_title} | Contact Us")
  	end
  end

   describe "Photo Page" do
    it "should have the content 'Our Photos" do
      visit '/static_pages/photos' 
      page.should have_content('Our Photos')
    end
     it "should have the title 'Our Photos'" do
			visit '/static_pages/photos'
  		page.should have_selector('title',
                    :text => "#{base_title} | Our Photos")
  	end
  end

  describe "Our Story Page" do
  	  it "should have the content 'Our Story" do
      visit '/static_pages/story' 
      page.should have_content('Our Story')
    end
    it "should have the title 'Our Story'" do
			visit '/static_pages/story'
  		page.should have_selector('title',
                    :text => "#{base_title} | Our Story")
  	end  
  end
end
