const checkPropertiesCanBeAnUniqueId = (property) => {
    let hasUniqueIdProperties = false;
    if (!property.nillable && property.maxOccurs === 1 && property.minOccurs === 1) {
        hasUniqueIdProperties = true;
    }
    return hasUniqueIdProperties;
};

/**
 * extract an uniqueId from a featureType
 * @param {*} featureType
 * @returns {null | string} name of the field of unique Id (Null if doesn't exist)
 */
export const getUniqueIdFieldName = (featureType) => {
    let uniqueIdFieldName = null;
    const StringOrIntProperties = featureType.properties.filter(property => ['xsd:string', 'xsd:int'].includes(property.type));
    const properties = StringOrIntProperties.filter(property => checkPropertiesCanBeAnUniqueId(property));
    if (Array.isArray(properties) && properties.length > 0) {
        uniqueIdFieldName = properties[0].name;
    }
    return uniqueIdFieldName;
};

