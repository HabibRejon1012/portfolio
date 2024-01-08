import { defineConfig } from '@pandacss/dev'



export default defineConfig({
    preflight: true,
    // define the content to scan 👇🏻
    include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
    exclude: [],
    jsxFramework: 'react',
    emitPackage: true,
    outdir: 'styled-system',
    conditions: {
        light: '[data-color-mode=light] &',
        dark: '[data-color-mode=dark] &',
    },
    theme: {
      
        extend: {
            semanticTokens: {
                colors: {

                    text_color: {
                        value: {
                            _dark: "{colors.color_dark}",
                            base: "{colors.color_light}"
                        }
                    },
                    bg_color: {
                        value: {
                            base: "{colors.bg_light}",
                            _dark: "{colors.bg_dark}"
                        }
                    },
                    bg_button_neo: {
                        value: {
                            base: "{colors.bg_btn_light}",
                            _dark: "{colors.bg_btn_dark}"
                        }
                    },
                    shadow_button_neo: {
                        value: {
                            base: "{colors.shadow_btn_light}",
                            _dark: "{colors.shadow_btn_dark}"
                        }
                    }
                 
                   
                }
              
            },
            tokens: {
                colors: {
                    bg_light: {value: "#ECF0F3"},
                    bg_dark: {value: "#212428"},
                    color_light: {value: "#3c3e41"},
                    color_dark: {value: "#c4cfde"},
                    color_red: {
                        value: "#ff014f"
                    },
                    bg_btn_light: {
                        value: "linear-gradient(145deg, #e2e8ec, #ffffff)"
                    },

                    bg_btn_dark: {
                        value: "linear-gradient(145deg, #1e2024, #23272b)"
                    },
                    shadow_btn_dark: {
                        value: `10px 10px 19px #1c1e22,
                        -10px -10px 19px #262a2e`
                    },
                    shadow_btn_light: {
                        value: `5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff`

                    }
                },  
                fonts: {
                    secondary: {value: "'Montserrat Variable', sans-serif;"},
                    primary: {value: "'Poppins', sans-serif;"}
                }              
            },
            fonts: {
            },
            
            breakpoints: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            }
        }
    }
})