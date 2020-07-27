Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root 'scripts#index', as: :authenticated_root
  end
  root to: 'pages#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :scripts, only: [:index, :show, :create, :update, :destroy] do
        resources :scenes, only: [:new, :create, :show]
      end
    end
  end

  get '*path', to: 'pages#home', via: :all
end
