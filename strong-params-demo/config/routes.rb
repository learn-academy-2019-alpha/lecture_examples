Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/contacts/new' #method to show the form
  post '/contacts/create' #method to submit form data

  get '/users/new' #method to show the form
  post '/users/create' #method to submit form data
end
