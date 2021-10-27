import { FormExampleType } from './examples/FormExample'

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

const users = ['User1', 'User2', 'User3']

export async function getUsers() {
  await sleep(1000)

  return users
}

export async function getUser(id: string) {
  await sleep(1000)

  return users.find(u => u === id)
}

export async function addUser(name: string) {
  await sleep(2000)
  users.push(name)

  return users
}

export async function login(form: FormExampleType) {
  await sleep(2000)
}

export async function removeUser(name: string) {
  await sleep(1000)
  users.splice(
    users.findIndex(u => u === name),
    1
  )

  return users
}
