require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)



module Twistthetides
  class Application < Rails::Application

    # this addes the bower components to the asset pipeline
    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
  end
end
