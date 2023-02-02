export function toOptions(object: any) {
    const options: any[] = [];

    object.forEach((element: any) => {
        options.push({
            label: element.label,
            value: element.slug
        });
    });

    return options;
}