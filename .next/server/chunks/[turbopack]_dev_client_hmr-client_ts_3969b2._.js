module.exports = {

"[turbopack]/dev/client/hmr-client.ts [app-ssr] (ecmascript, loader)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__((__turbopack_import__) => {
    return Promise.all(["server/chunks/[turbopack]_dev_client_hmr-client_ts_7c44c3._.js"].map((chunk) => __turbopack_load__(chunk))).then(() => {
        return __turbopack_require__("[turbopack]/dev/client/hmr-client.ts [app-ssr] (ecmascript, manifest chunk)");
    }).then((chunks) => {
        return Promise.all(chunks.map((chunk) => __turbopack_load__(chunk)));
    }).then(() => {
        return __turbopack_import__("[turbopack]/dev/client/hmr-client.ts [app-ssr] (ecmascript)");
    });
});

})()),

};