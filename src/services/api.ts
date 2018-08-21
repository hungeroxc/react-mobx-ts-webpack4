import http from '@utils/http'

export function getRequest(data = {}): Promise<any> {
    return http.get('api/get', data)
}
