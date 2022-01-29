import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule
    ]
})
export class MaterialModule { }