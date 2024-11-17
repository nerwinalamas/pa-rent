import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title("pa=rent")
        .items([
            S.documentTypeListItem("property").title("Properties"),
            S.documentTypeListItem("category").title("Categories"),
            S.documentTypeListItem("amenity").title("Amenities"),
            S.documentTypeListItem("contractLength").title("Contract Length"),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() &&
                    ![
                        "property",
                        "category",
                        "amenity",
                        "contractLength",
                    ].includes(item.getId()!)
            ),
        ]);
