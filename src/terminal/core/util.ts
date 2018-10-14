

export function sleeper(ms) {
    return new Promise(resolve => setTimeout(() => resolve(0), ms));
}