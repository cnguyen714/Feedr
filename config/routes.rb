Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :feeds, only: [:index, :show, :create, :update, :destroy]
    resources :sources, only: [:show, :create, :update, :destroy]
  end
  
end
