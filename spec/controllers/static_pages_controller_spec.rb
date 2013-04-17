require 'spec_helper'

describe StaticPagesController do

  describe "GET 'home'" do
    it "returns http success" do
      get 'home'
      response.should be_success
    end
  end

  describe "GET 'directions'" do
    it "returns http success" do
      get 'directions'
      response.should be_success
    end
  end

  describe "GET 'registry'" do
    it "returns http success" do
      get 'registry'
      response.should be_success
    end
  end

  describe "GET 'contact'" do
    it "returns http success" do
      get 'contact'
      response.should be_success
    end
  end

  describe "GET 'photos'" do
    it "returns http success" do
      get 'photos'
      response.should be_success
    end
  end

end
