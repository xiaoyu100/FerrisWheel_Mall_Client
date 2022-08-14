const baseURL = "localhost:9000";

const request = function(config){
	const {method,url,params,data,header} = config;
	
	uni.request({
		url:baseURL + url,
		method:method?method:'GET',
		params:params,
		data:data,
		header:header,
		timeout:5000,
		success(res){
			return Promise.resolve(res);
		},
		fail(err){
			return Promise.reject(err);
		}
	});
}

export default request;