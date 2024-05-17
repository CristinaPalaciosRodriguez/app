import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonalComponent } from './personal/personal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { EstudiosComponent } from './estudios/estudios.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { MatChipsModule } from '@angular/material/chips';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SkillsComponent } from './skills/skills.component';
import { ConocimientoTotalComponent } from './conocimiento-total/conocimiento-total.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormularioComponent,
    PersonalComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ConocimientosComponent,
    CursosComponent,
    IdiomasComponent,
    ComentariosComponent,
    SkillsComponent,
    ConocimientoTotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
