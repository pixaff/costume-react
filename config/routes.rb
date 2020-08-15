Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  authenticated :user do
    # root 'scripts#index', as: :authenticated_root
    namespace :api do # , defaults: { format: :json }
      namespace :v1 do
        resources :scripts
        resources :scenes, only: %i[create destroy]
        resources :roles, only: %i[create destroy]
      end
    end

  end
  get '*path', to: 'pages#home', via: :all
end
