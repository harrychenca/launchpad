require 'spec_helper'

describe LinkedinController do

  describe "GET 'resp'" do
    it "returns http success" do
      get 'resp'
      response.should be_success
    end
  end

end
