var config = {
    deps: [
        "Magento_Theme/js/cstm-script"
      ],
    paths: {            
            'slick': "Magento_Theme/js/slick.min"
            
        },   
    shim: {
        'slick': {
            deps: ['jquery']
        }
    }
    
};