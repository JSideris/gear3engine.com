"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[2095],{6420:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(s(2136));class l extends n.default{constructor(){super(),this.unlocked=this.unlocked??!0}fixedUpdate(t,e){this.addOn?.fixedUpdate&&this.addOn.fixedUpdate(t,e)}kill(t){this.unset()}destroy(){this.unset()}isCompatibleWith(t){return t instanceof this.T&&t.isCompatibleWith(this.bearer)}set(t,e){let s=t;return(e||this.unlocked&&this.isCompatibleWith(t))&&(s=this.unset(),t==s&&(s=null),t.slot&&t.slot.unset(),t.slot=this,t.bearer=this.bearer,this.addOn=t,t.install()),s}unset(){let t=this.addOn;return t&&(t.uninstall(),t.slot=null,t.bearer=null,this.addOn=null),t}}e.default=l},102:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(s(2136));class l extends n.default{constructor(){super(),this.dropProbability=this.dropProbability??0}install(){}uninstall(){}destroy(){}}e.default=l}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1kMzI2YzgwMy5kMDhkZmM5OTllMjRkMTczZjQ3NC5qcyIsIm1hcHBpbmdzIjoiZ0lBQ0EsSUFBSUEsRUFBbUJDLE1BQVFBLEtBQUtELGlCQUFvQixTQUFVRSxHQUM5RCxPQUFRQSxHQUFPQSxFQUFJQyxXQUFjRCxFQUFNLENBQUUsUUFBV0EsRUFDeEQsRUFDQUUsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsRUFBZ0JSLEVBQWdCLEVBQVEsT0FDOUMsTUFBTVMsVUFBa0JELEVBQWNFLFFBQ2xDQyxjQUNJQyxRQUNBWCxLQUFLWSxTQUFXWixLQUFLWSxXQUFZLENBQ3JDLENBQ0FDLFlBQVlDLEVBQUlDLEdBQVFmLEtBQUtnQixPQUFPSCxhQUFlYixLQUFLZ0IsTUFBTUgsWUFBWUMsRUFBSUMsRUFBTyxDQUNyRkUsS0FBS0MsR0FBUWxCLEtBQUttQixPQUFTLENBQzNCQyxVQUFZcEIsS0FBS21CLE9BQVMsQ0FDMUJFLGlCQUFpQkwsR0FDYixPQUFPQSxhQUFpQmhCLEtBQUtzQixHQUFLTixFQUFNSyxpQkFBaUJyQixLQUFLdUIsT0FDbEUsQ0FDQUMsSUFBSVIsRUFBT1MsR0FDUCxJQUFJQyxFQUFVVixFQVlkLE9BWElTLEdBQVV6QixLQUFLWSxVQUFZWixLQUFLcUIsaUJBQWlCTCxNQUNqRFUsRUFBVTFCLEtBQUttQixRQUNYSCxHQUFTVSxJQUNUQSxFQUFVLE1BQ1ZWLEVBQU1XLE1BQ05YLEVBQU1XLEtBQUtSLFFBQ2ZILEVBQU1XLEtBQU8zQixLQUNiZ0IsRUFBTU8sT0FBU3ZCLEtBQUt1QixPQUNwQnZCLEtBQUtnQixNQUFRQSxFQUNiQSxFQUFNWSxXQUVIRixDQUNYLENBQ0FQLFFBQ0ksSUFBSUgsRUFBUWhCLEtBQUtnQixNQU9qQixPQU5JQSxJQUNBQSxFQUFNYSxZQUNOYixFQUFNVyxLQUFPLEtBQ2JYLEVBQU1PLE9BQVMsS0FDZnZCLEtBQUtnQixNQUFRLE1BRVZBLENBQ1gsRUFFSlgsRUFBQSxRQUFrQkcsQyxzQkMxQ2xCLElBQUlULEVBQW1CQyxNQUFRQSxLQUFLRCxpQkFBb0IsU0FBVUUsR0FDOUQsT0FBUUEsR0FBT0EsRUFBSUMsV0FBY0QsRUFBTSxDQUFFLFFBQVdBLEVBQ3hELEVBQ0FFLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLEVBQWdCUixFQUFnQixFQUFRLE9BQzlDLE1BQU0rQixVQUFjdkIsRUFBY0UsUUFDOUJDLGNBQ0lDLFFBQ0FYLEtBQUsrQixnQkFBa0IvQixLQUFLK0IsaUJBQW1CLENBQ25ELENBQ0FILFVBQVksQ0FDWkMsWUFBYyxDQUNkVCxVQUFZLEVBRWhCZixFQUFBLFFBQWtCeUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlYXIzZW5naW5lLXdlYnNpdGUvLi4vLi4vR0FNRVMtU0lNVUxBVE9SUy1GVU4vZ2VhcjNlbmdpbmUvcGx1Z2lucy9nZWFyM2VuZ2luZS9idWlsZC9lbnRpdGllcy9hZGQtb25zL2FkZC1vbi1zbG90LmpzIiwid2VicGFjazovL2dlYXIzZW5naW5lLXdlYnNpdGUvLi4vLi4vR0FNRVMtU0lNVUxBVE9SUy1GVU4vZ2VhcjNlbmdpbmUvcGx1Z2lucy9nZWFyM2VuZ2luZS9idWlsZC9lbnRpdGllcy9hZGQtb25zL2FkZC1vbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBnYW1lX29iamVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb3JlL2dhbWUtb2JqZWN0XCIpKTtcclxuY2xhc3MgQWRkT25TbG90IGV4dGVuZHMgZ2FtZV9vYmplY3RfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy51bmxvY2tlZCA9IHRoaXMudW5sb2NrZWQgPz8gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZpeGVkVXBkYXRlKGR0LCB0aW1lKSB7IHRoaXMuYWRkT24/LmZpeGVkVXBkYXRlICYmIHRoaXMuYWRkT24uZml4ZWRVcGRhdGUoZHQsIHRpbWUpOyB9XHJcbiAgICBraWxsKGNvZGUpIHsgdGhpcy51bnNldCgpOyB9XHJcbiAgICBkZXN0cm95KCkgeyB0aGlzLnVuc2V0KCk7IH1cclxuICAgIGlzQ29tcGF0aWJsZVdpdGgoYWRkT24pIHtcclxuICAgICAgICByZXR1cm4gYWRkT24gaW5zdGFuY2VvZiB0aGlzLlQgJiYgYWRkT24uaXNDb21wYXRpYmxlV2l0aCh0aGlzLmJlYXJlcik7XHJcbiAgICB9XHJcbiAgICBzZXQoYWRkT24sIGZvcmNlKSB7XHJcbiAgICAgICAgbGV0IGVqZWN0ZWQgPSBhZGRPbjtcclxuICAgICAgICBpZiAoZm9yY2UgfHwgKHRoaXMudW5sb2NrZWQgJiYgdGhpcy5pc0NvbXBhdGlibGVXaXRoKGFkZE9uKSkpIHtcclxuICAgICAgICAgICAgZWplY3RlZCA9IHRoaXMudW5zZXQoKTtcclxuICAgICAgICAgICAgaWYgKGFkZE9uID09IGVqZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICBlamVjdGVkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGFkZE9uLnNsb3QpXHJcbiAgICAgICAgICAgICAgICBhZGRPbi5zbG90LnVuc2V0KCk7XHJcbiAgICAgICAgICAgIGFkZE9uLnNsb3QgPSB0aGlzO1xyXG4gICAgICAgICAgICBhZGRPbi5iZWFyZXIgPSB0aGlzLmJlYXJlcjtcclxuICAgICAgICAgICAgdGhpcy5hZGRPbiA9IGFkZE9uO1xyXG4gICAgICAgICAgICBhZGRPbi5pbnN0YWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlamVjdGVkO1xyXG4gICAgfVxyXG4gICAgdW5zZXQoKSB7XHJcbiAgICAgICAgbGV0IGFkZE9uID0gdGhpcy5hZGRPbjtcclxuICAgICAgICBpZiAoYWRkT24pIHtcclxuICAgICAgICAgICAgYWRkT24udW5pbnN0YWxsKCk7XHJcbiAgICAgICAgICAgIGFkZE9uLnNsb3QgPSBudWxsO1xyXG4gICAgICAgICAgICBhZGRPbi5iZWFyZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkZE9uO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFkZE9uU2xvdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRkLW9uLXNsb3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZ2FtZV9vYmplY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29yZS9nYW1lLW9iamVjdFwiKSk7XHJcbmNsYXNzIEFkZE9uIGV4dGVuZHMgZ2FtZV9vYmplY3RfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kcm9wUHJvYmFiaWxpdHkgPSB0aGlzLmRyb3BQcm9iYWJpbGl0eSA/PyAwO1xyXG4gICAgfVxyXG4gICAgaW5zdGFsbCgpIHsgfVxyXG4gICAgdW5pbnN0YWxsKCkgeyB9XHJcbiAgICBkZXN0cm95KCkgeyB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQWRkT247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZC1vbi5qcy5tYXAiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwidGhpcyIsIm1vZCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImdhbWVfb2JqZWN0XzEiLCJBZGRPblNsb3QiLCJkZWZhdWx0IiwiY29uc3RydWN0b3IiLCJzdXBlciIsInVubG9ja2VkIiwiZml4ZWRVcGRhdGUiLCJkdCIsInRpbWUiLCJhZGRPbiIsImtpbGwiLCJjb2RlIiwidW5zZXQiLCJkZXN0cm95IiwiaXNDb21wYXRpYmxlV2l0aCIsIlQiLCJiZWFyZXIiLCJzZXQiLCJmb3JjZSIsImVqZWN0ZWQiLCJzbG90IiwiaW5zdGFsbCIsInVuaW5zdGFsbCIsIkFkZE9uIiwiZHJvcFByb2JhYmlsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==