Rails.application.routes.draw do
  resources :posts
  devise_for :users
  authenticated :user do
    root to: 'posts#index'
  end
  unauthenticated :user do
    root to: 'static_pages#index'
  end
end
