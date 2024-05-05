export const validate_password = (password) => {
    if (password.length < 8) {
        return 'Le mot de passe doit contenir au moins 8 caractères';
    }

    // if (!/[a-z]/.test(password)) {
    //     return 'Le mot de passe doit contenir au moins une lettre minuscule';
    // }
    //
    // if (!/[A-Z]/.test(password)) {
    //     return 'Le mot de passe doit contenir au moins une lettre majuscule';
    // }
    //
    // if (!/[0-9]/.test(password)) {
    //     return 'Le mot de passe doit contenir au moins un chiffre';
    // }

    return '';
}

export const validated_email = (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return false;
    }
    return true;
}

export const validated_phone = (phone) => {
    if (!/^\d{10}$/.test(phone)) {
        return 'Numéro de téléphone invalide (10 chiffres sans espace)';
    }
    return '';
}


export const required_data = (data) => {
    Object.keys(data).forEach(key => {
        if (!data[key]) {
            return false;
        }
    }
    );
    return true;
}
