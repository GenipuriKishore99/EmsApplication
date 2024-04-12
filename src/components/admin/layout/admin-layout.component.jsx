import { AdminMenu } from "../event-category/admin-menu/admin-menu.component";
import { EventCategoryForm } from "../event-category/event-category-form/event-category-form.component";

export function AdminLayout() {
  return (
    <div>
      <div style={{backgroundColor:"lightblue",padding:"20px"}}>Top Banner</div>
      <div className="row">
        <div className="col-1">
        <AdminMenu></AdminMenu>
        </div>
      
      <div className="col-11">
        <EventCategoryForm></EventCategoryForm>
       </div>
      </div>
    </div>
  );
}
