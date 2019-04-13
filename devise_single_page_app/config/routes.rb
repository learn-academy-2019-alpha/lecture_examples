Rails.application.routes.draw do
  resources :bikes, only: [:index, :create, :delete, :show]
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "*path", to: 'pages#protected', constraints: ->(request){ request.format.html? }
  get "protected", to: 'pages#protected', as: :protected
  root to: 'pages#unprotected'

end
