export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "Debe completar este campo";
    } else if (!input.duration) {
        errors.duration = "Debe completar este campo";
    } else if (!input.difficulty) {
        errors.difficulty = "Debe seleccionar la complejidad";
    } else if (!input.season) {
        errors.season = "Debe seleccionar una estacion";
    } else if (input.countryId === []) {
        errors.countryId = "Debe seleccionar un pais";
    }
    return errors;
}
