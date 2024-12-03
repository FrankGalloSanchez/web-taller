import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  /**
   * Lista de ítems del menú, obtenidos de las rutas de la aplicación.
   * Filtra rutas con path definido y elimina las que contienen parámetros dinámicos.
   */
  public menuItems = routes
    .map((route) => ({
      ...route,
      children: route.children?.filter((child) => child.path && !child.path.includes(':')),
    }))
    .filter((route) => route.path);

  /**
   * Índice del menú desplegable actualmente abierto. Null si ninguno está abierto.
   */
  public dropdownIndex: number | null = null;

  /**
   * Índices de submenús desplegables anidados, asociados a cada menú principal.
   * Utiliza un objeto para rastrear el estado de submenús por cada menú principal.
   */
  public subDropdownIndex: { [key: number]: number | null } = {};

  /**
   * Alterna la visibilidad del menú desplegable principal.
   * @param index Índice del menú que se desea alternar.
   */
  toggleDropdown(index: number): void {
    this.dropdownIndex = this.dropdownIndex === index ? null : index;
  }

  /**
   * Alterna la visibilidad del submenú desplegable anidado.
   * @param parentIndex Índice del menú principal.
   * @param childIndex Índice del submenú que se desea alternar.
   */
  toggleSubDropdown(parentIndex: number, childIndex: number): void {
    if (!this.subDropdownIndex[parentIndex]) {
      this.subDropdownIndex[parentIndex] = null;
    }
    this.subDropdownIndex[parentIndex] =
      this.subDropdownIndex[parentIndex] === childIndex ? null : childIndex;
  }

  /**
   * Acción para cerrar la sesión del usuario.
   * Aquí puedes redirigir al usuario o limpiar datos relacionados con la sesión.
   */
  logout(): void {
    console.log('Sesión cerrada');
    // Implementa la lógica de cierre de sesión según sea necesario, como:
    // - Redirigir a la página de inicio de sesión.
    // - Limpiar datos almacenados en el estado global o localStorage.
  }
}
