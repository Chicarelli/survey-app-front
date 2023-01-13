export interface HttpRequest {
    get: (...props: any) => Promise<any>
    post: (...props: any) =>  Promise<any>
    // put: (...props: any) => Promise<any>
    // patch: (...props: any) => Promise<any>
    delete: (...props: any) => Promise<any>
}