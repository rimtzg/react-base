//SERVER
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    exports.url_server = 'http://localhost:5000'
} else {
    exports.url_server = 'https://my_server.com'
}

exports.layout_config = {
    "navAnchor": "left",
    "navVariant": {
        "xs": "temporary",
        "sm": "permanent",
        "md": "permanent"
    },
    "navWidth": 256,
    "collapsible": {
        "xs": false,
        "sm": true,
        "md": false
    },
    "collapsedWidth": {
        "xs": 64,
        "sm": 64,
        "md": 64
    },
    "clipped": {
        "xs": true,
        "sm": false,
        "md": false
    },
    "headerPosition": {
        "xs": "fixed",
        "sm": "fixed",
        "md": "fixed"
    },
    "squeezed": {
        "xs": true,
        "sm": true,
        "md": true
    },
    "footerShrink": {
        "xs": true,
        "sm": true,
        "md": true
    }
}

exports.table_options = {
    filterType : 'checkbox',
    selectableRows : 'simple',
    pagination : true,
    responsive : 'scroll',
    rowsPerPageOptions : [10, 50, 100],
    rowHover : true,
    fixedHeader : false,
    
    textLabels: {
        body: {
            noMatch: "No hay elementos",
            toolTip: "Ordenar",
        },
        pagination: {
            next: "Pagina siguiente",
            previous: "Pagina anterior",
            rowsPerPage: "Elementos por pagina:",
            displayRows: "de",
        },
        toolbar: {
            search: "Buscar",
            downloadCsv: "Descargar CSV",
            print: "Imprimir",
            viewColumns: "Ver columnas",
            filterTable: "Filtrar",
        },
        filter: {
            all: "Todos",
            title: "FILTROS",
            reset: "BORRAR",
        },
        viewColumns: {
            title: "Mostrar columnas",
            titleAria: "Mostrar/Ocultar columnas",
        },
        selectedRows: {
            text: "elemento(s) seleccionados",
            delete: "Eliminar",
            deleteAria: "Eliminar elementos seleccionados",
        },
    },
}