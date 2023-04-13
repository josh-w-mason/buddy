import { user } from '../../models/Users'
import connection from './connection'

export function fetchAllDB(db = connection): Promise<user[]> {
  return db('users').select()
}

export function createProfileDB(
  newUser: user,
  db = connection
): Promise<user[]> {
  return db('users')
    .insert({
      user_name: newUser.user_name,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      age: newUser.age,
      country_origin: newUser.country_origin,
      city: newUser.city,
      user_status: newUser.user_status,
      prim_language: newUser.prim_language,
      english_level: newUser.english_level,
      sharing_one: newUser.sharing_one,
      sharing_two: newUser.sharing_two,
      sharing_three: newUser.sharing_three,
      description: newUser.description,
    })
    .returning([
      'user_name',
      'first_name',
      'last_name',
      'email',
      'age',
      'country_origin',
      'city',
      'user_status',
      'prim_language',
      'english_level',
      'sharing_one',
      'sharing_two',
      'sharing_three',
      'description',
    ])
}

export function editProfileDB(
  updateUser: user,
  db = connection
): Promise<user[]> {
  return db('users').select().where('users.id', updateUser.id).first().update({
    user_name: updateUser.user_name,
    first_name: updateUser.first_name,
    last_name: updateUser.last_name,
    email: updateUser.email,
    age: updateUser.age,
    country_origin: updateUser.country_origin,
    city: updateUser.city,
    user_status: updateUser.user_status,
    prim_language: updateUser.prim_language,
    english_level: updateUser.english_level,
    sharing_one: updateUser.sharing_one,
    sharing_two: updateUser.sharing_two,
    sharing_three: updateUser.sharing_three,
    description: updateUser.description,
  })
}
