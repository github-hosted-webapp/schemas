export function createErrorHandler(action: string) {
    return function ErrorHandler(e: Error) {
        console.error(`Failed to ${action}:`, e.message);
        process.exit(1);
    };
}
