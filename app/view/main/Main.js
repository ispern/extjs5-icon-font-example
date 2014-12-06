/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'panel',
            region: 'center',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            defaults: {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                defaults: {
                    xtype: 'button',
                    scale: 'large'
                }
            },
            items: [
                {
                    items: [
                        {
                            text: 'Add',
                            glyph: 0xf055
                        },
                        {xtype: 'box', width: 10},
                        {
                            text: 'Remove',
                            glyph: 0xf068
                        }
                    ]
                },
                {
                    xtype: 'box',
                    height: 50
                },
                {
                    items: [
                        {
                            glyph: 'xe7ba@icomoon'
                        },
                        {xtype: 'box', width: 10},
                        {
                            glyph: 'xe7be@icomoon'
                        },
                        {xtype: 'box', width: 10},
                        {
                            glyph: 'xe7bf@icomoon'
                        },
                        {xtype: 'box', width: 10},
                        {
                            glyph: 'xe7c0@icomoon'
                        },
                        {xtype: 'box', width: 10},
                        {
                            glyph: 'xe7c1@icomoon'
                        }
                    ]
                }
            ]
        }
    ]
});
