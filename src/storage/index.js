// Storage封装
const STORAGE_KEY='mall'
export default{
	//存储值
	setItem(key,value,module_name){
		if(module_name){
			let val=this.getItem(module_name);
			val[key]=value;
			this.setItem(module_name,val)
		}else{
			let val=this.getStorge();
			val[key]=value;
			window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
	
		}
	},
	//获取某一个模块下面的属性  eg:user下面的username  {"user":{"userName":"Jack","age":30,"sex":1}}
	getItem(key,module_name){
		if(module_name){
			let val=this.getItem(module_name);
			if(val) return val[key]
		}
        return this.getStorge()[key]
	},
	//获取整个浏览器的缓存信息
	getStorge(){
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
	},
	//清空某个值
	clear(key,module_name){
        let val=this.getStorge();
		if(module_name){
			if(!val[module_name]) return;
			delete val[module_name][key];
		}else{
			delete val[key]
		}
		// this.setItem(STORAGE_KEY,val)
		window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
	}
}