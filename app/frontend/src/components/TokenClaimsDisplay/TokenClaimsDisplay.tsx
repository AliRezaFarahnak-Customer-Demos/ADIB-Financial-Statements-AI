import { Label } from "@fluentui/react";
import { useMsal } from "@azure/msal-react";
import {
    DataGridBody,
    DataGridRow,
    DataGrid,
    DataGridHeader,
    DataGridHeaderCell,
    DataGridCell,
    createTableColumn,
    TableColumnDefinition
} from "@fluentui/react-table";
import { appServicesToken } from "../../authConfig";

type Claim = {
    name: string;
    value: string;
};

export const TokenClaimsDisplay = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    const ToString = (a: string | any) => {
        if (typeof a === "string") {
            return a;
        } else {
            return JSON.stringify(a);
        }
    };

    let createClaims = (o: Record<string, unknown> | undefined) => {
        return Object.keys(o ?? {}).map((key: string) => {
            return { name: key, value: ToString((o ?? {})[key]) };
        });
    };
    const items: Claim[] = createClaims(activeAccount?.idTokenClaims ?? appServicesToken?.user_claims);

    const columns: TableColumnDefinition<Claim>[] = [
        createTableColumn<Claim>({
            columnId: "name",
            compare: (a: Claim, b: Claim) => {
                return a.name.localeCompare(b.name);
            },
            renderHeaderCell: () => {
                return "Name";
            },
            renderCell: item => {
                return item.name;
            }
        }),
        createTableColumn<Claim>({
            columnId: "value",
            compare: (a: Claim, b: Claim) => {
                return a.value.localeCompare(b.value);
            },
            renderHeaderCell: () => {
                return "Value";
            },
            renderCell: item => {
                return item.value;
            }
        })
    ];

    return (
        <div>
            <Label>ID Token Claims</Label>
            <DataGrid items={items} columns={columns} sortable getRowId={item => item.name}>
                <DataGridHeader>
                    <DataGridRow>{({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}</DataGridRow>
                </DataGridHeader>
                <DataGridBody<Claim>>
                    {({ item, rowId }) => <DataGridRow<Claim> key={rowId}>{({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}</DataGridRow>}
                </DataGridBody>
            </DataGrid>
        </div>
    );
};
