const TokenKey = 'token'
const Gid = 'gid'
const From = 'from'
const Version = 'version'

export function getToken() {
		return localStorage.getItem(TokenKey)
}

export function setToken(token) {
		return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
		return localStorage.removeItem(TokenKey)
}

export function getGid() {
		return localStorage.getItem(Gid)
}

export function setGid(gid) {
		return localStorage.setItem(Gid, gid)
}

export function removeGid() {
		return localStorage.removeItem(Gid)
}

export function getFrom() {
		return localStorage.getItem(From) || 3
}

export function setFrom(from) {
		return localStorage.setItem(From, from)
}

export function removeFrom() {
		return localStorage.removeItem(From)
}

export function getVersion() {
		return localStorage.getItem(Version)
}
