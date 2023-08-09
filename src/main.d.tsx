import "typescript/lib/lib";

declare global {
    interface Window {
        cordova: {
            plugins: {
                // TODO add here type declarations for plugins
            }
        }
    }
}