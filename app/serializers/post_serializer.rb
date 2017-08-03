class PostSerializer < ActiveModel::Serializer
  attributes :id, :attachment, :content, :created_at
  has_one :user
end
