Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :feeds, only: [:index, :show, :create, :update, :destroy] do
      resources :sources, only: [:index]
      resources :articles, only: [:index]
    end
    resources :sources, only: [:index, :show, :create, :update, :destroy] do
      resources :articles, only: [:index]
    end
    
    resources :articles, only: [:index, :show]
  end
  
end
