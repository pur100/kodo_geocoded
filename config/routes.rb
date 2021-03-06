Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: 'pages#landing'


  resources :users do
    resources :events, only: [:new, :create, :edit]
    resources :posts, only: [:new, :create, :edit]
  end
  resources :events, except: [:new, :create, :edit]
  resources :posts, except: [:new, :create, :edit]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
