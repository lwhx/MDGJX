const ipm = (
    location.href.indexOf('laftools.cn') !== -1
) || (
        location.href.indexOf('mdgjx.com') !== -1
    ) || (
        location.href.indexOf('laftools') !== -1
    ) || (
    location.href.indexOf('codegen.cc') !== -1
    )

const idx_http = (location.href).indexOf('http://')
export const isSSLMode = ()=>{
    return idx_http == -1
}

export const isOnlineTestMode = location.href.indexOf('testmiaoda.codegen.cc') !== -1
export const isPortalMode = () => {
    return ipm
}