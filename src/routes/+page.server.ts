import generator from "generate-password";

export function load() {
    return {
        password: generator.generate()
    }
}