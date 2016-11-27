Rails.application.routes.draw do

  get 'hello_world', to: 'hello_world#index'
  resources :orders, only: [:index, :create] do
    collection do
      get :listing
    end
  end
  root 'orders#index'

end
