# 4Gamers Backend Apps

4Gamers is a platform designed for gamers to share their gaming news, reviews, experiences, tips, and tricks with fellow gamers. This repository currently focuses on backend development, with plans for frontend development in the future.
![thumbnail](https://i.postimg.cc/hvBp06q7/file-cover-1.png)

**Tech Stack :**
- NodeJS
- Express
- Prisma
- Mysql
- JsonWebToken


# Database
![Database Design](https://i.postimg.cc/Nf3gD0r9/Screenshot-2024-04-16-105455.png)


# API
All endpoint documentation with request spec and response for 4Gamers API also documentation for authentication

## Authentication

Endpoint : **POST /auth/register**
Request Body :
```JSON
{
	"email"  :  "ibrhmsptra@gmail.com",
	"username"  :  "ibrhmsptra",
	"password"  :  "Baim!123"
}
```
Response Success :
```JSON
{

	"data": {
		"uuid":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13",
		"email":  "ibrhmsptra@gmail.com",
		"username":  "ibrhmsptra"
	},
	"message":  "Create Account Success"
}
```

Endpoint : **POST /auth/login**
Request Body :
```JSON
{
	"email"  :  "ibrhmsptra@gmail.com",
	"password"  :  "Baim!123"
}
```
Response Success :
```JSON
{
	"data":  {
		"uuid":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13",
		"email":  "ibrhmsptra@gmail.com",
		"username":  "ibrhmsptra",
		"photo":  null
	},
	"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8"
}
```

## Tags

Endpoint : **GET /tags**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Response Success :
```JSON
[
	{
		"id":  1,
		"name":  "Horor"
	},
	{
		"id":  2,
		"name":  "FPS"
	},
	{
		"id":  3,
		"name":  "Fighting"
	},
	{
		"id":  4,
		"name":  "Adventure"
	},
	{
		"id":  5,
		"name":  "Action"
	},
	{
		"id":  6,
		"name":  "Survival"
	},
]
```

Endpoint : **POST /insert**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Request Body :
```JSON
{
	"name"  :  "Open World"
}
```
Response Success :
```JSON
[
	"message":  "Tag successfully added",
	"data":  {
		"id":  50,
		"name":  "Open World"
	}
]
```
Endpoint : **PATCH /tags/edit/:id**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Request Body :
```JSON
{
	"name"  :  "Open World"
}
```
Response Success :
```JSON
[
	"message":  "Tag successfully updated",
	"data":  {
		"id":  50,
		"name":  "Open World"
	}
]
```
Endpoint : **DELETE /tags/delete/:id**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Response Success :
```JSON
[
	"message":  "Tag successfully deleted",
	"data":  {
		"id":  50,
		"name":  "Open World"
	}
]
```

## Post

Endpoint : **POST /post/create**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Request Body :
```JSON
{
	"title"  :  "Susahnya capai radiant di valorant",
	"image"  :  "gambar.png",
	"content"  :  "Saya capai rank radiant dalam waktu 2 tahun 4 bulan. Susahnya minta ampun, dari banyaknya cheater berkeliaran sampai ketemu tim yang gak kompak tpi semua itu terbayar saat saya berhasil mencapai radiant di server SEA",
	"tags"  :  [2,  5]
}
```
Response Success :
```JSON
[
	"message":  "Post successfully created",
	"data":  {
		"id":  10,
		"title":  "Susahnya capai radiant di valorant",
		"image":  "gambar.png",
		"content":  "Saya capai rank radiant dalam waktu 2 tahun 4 bulan. Susahnya minta ampun, dari banyaknya cheater berkeliaran sampai ketemu tim yang gak kompak tpi semua itu terbayar saat saya berhasil mencapai radiant di server SEA",
		"created_at":  "2024-04-16T04:53:50.453Z",
		"authorId":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13",
		"tags": [
			{
				"id":  2,
				"name":  "FPS"
			},
			{
				"id":  5,
				"name":  "Action"
			}
		]
	}
]
```

Endpoint : **PATCH /post/edit/:id**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Request Body :
```javascript
{
	"title"  :  "title telah di edit", //optional
	"image"  :  "dave.png", //optional
	"content"  :  "content telah di edit", //optional
	"tags"  :  [1,5] //optional
}
```
Response Success :
```JSON
[
	"message":  "Post successfully updated",
	"data":  {
		"id":  10,
		"title":  "title telah di edit",
		"image":  "dave.png",
		"content":  "content telah di edit",
		"created_at":  "2024-04-16T04:53:50.453Z",
		"authorId":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13",
		"tags": [
			{
				"id":  1,
				"name":  "Horor"
			},
			{
				"id":  5,
				"name":  "Action"
			}
		]
	}
]
```

Endpoint : **DELETE /post/delete/:id**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Response Success :
```JSON
[
	"message":  "Post successfully deleted",
	"data":  {
		"id":  12,
		"title":  "ni post",
		"image":  "",
		"content":  "tes dan coba",
		"created_at":  "2024-04-16T05:11:51.127Z",
		"authorId":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13"
	}
]
```
Endpoint : **GET /post/user/:page**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Response Success :
```JSON
[
	"page":  "1",
	"totalResult":  2,
	"data":  [
		{
			"id":  10,
			"title":  "Susahnya capai radiant di valorant",
			"image":  "gambar.png",
			"content":  "Saya capai rank radiant dalam waktu 2 tahun 4 bulan. Susahnya minta ampun, dari banyaknya cheater berkeliaran sampai ketemu tim yang gak kompak tpi semua itu terbayar saat saya berhasil mencapai radiant di server SEA",
			"created_at":  "2024-04-16T04:53:50.453Z",
			"authorId":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13",
			"tags":  [
				{
					"id":  2,
					"name":  "FPS"
				},
				{
					"id":  5,
					"name":  "Action"
				}
			]
		},
		{
			"id":  11,
			"title":  "coba ini udh di edit",
			"image":  "dave.png",
			"content":  "Dave the Diver bukanlah Stardew Valley, dan memang banyak mekanika dan struktur yang pada dasarnya berbeda, tetapi perasaan mengelola kehidupan, mengelola bisnis, adalah sama, dan hampir tidak ada permainan lain, kecuali mungkin Kynseed, yang mendekati meniru kualitas itu.Di Dave the Diver, Anda... yah, Anda Dave - Penyelam. Anda seorang penyelam bebas, seorang spearfisherman yang tiba-tiba mendapat kesempatan untuk mengambil alih restoran sushi bobrok di tepi atraksi lokal yang disebut, sebuah laguna di mana tata letak dan flora dan fauna endemik berubah setiap hari. Sekarang, dengan menangkap ikan yang berharga dan menyajikannya sebagai sushi yang baru dibuat di malam hari, Dave harus mengangkat restoran ini dan membantu penduduk setempat dengan berbagai tugas, termasuk mungkin menemukan peradaban rahasia di dasar lautan.",
			"created_at":  "2024-04-16T05:01:13.613Z",
			"authorId":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13",
			"tags":  [
				{
					"id":  1,
					"name":  "Horor"
				},
				{
					"id":  5,
					"name":  "Action"
				}
			]
		}
	]
]
```

Endpoint : **GET /post/:page**
Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Response Success :
```JSON
[
	"page":  "1",
	"totalResult":  2,
	"data":  [
		{
			"id":  10,
			"title":  "Susahnya capai radiant di valorant",
			"image":  "gambar.png",
			"content":  "Saya capai rank radiant dalam waktu 2 tahun 4 bulan. Susahnya minta ampun, dari banyaknya cheater berkeliaran sampai ketemu tim yang gak kompak tpi semua itu terbayar saat saya berhasil mencapai radiant di server SEA",
			"created_at":  "2024-04-16T04:53:50.453Z",
			"authorId":  "b5af85b6-fa59-4ffd-8a47-e4b7e9d1be13",
			"tags":  [
				{
					"id":  2,
					"name":  "FPS"
				},
				{
					"id":  5,
					"name":  "Action"
				}
			]
		},
		{
			"id":  11,
			"title":  "tes",
			"image":  "gambar.png",
			"content":  "ini saya post dar akun admin",
			"created_at":  "2024-04-16T05:01:13.613Z",
			"authorId":  "c5gu85b6-fa59-4ffd-8a47-e4b7e8d1be13",
			"tags":  [
				{
					"id":  1,
					"name":  "Horor"
				},
				{
					"id":  5,
					"name":  "Action"
				}
			]
		}
	]
]
```

## Authorization

Request Headers :
```JSON
{
	"Authorization"  :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzI0MDc5MiwiZXhwIjoxNzEzMjQ0MzkyfQ.BILYGxWoKKHS1Y1MIqIRa9Vp2jsLCLmDvOAHaKj52J8",
}
```
Response without JWT :
```JSON
{
	"message":  "No JWT token provided"
}
```
Response with invalid JWT :
```JSON
{
	"message":  "Token not valid"
}
```


# Author

github : [IbrhmSptra](https://www.github.com/IbrhmSptra)
Linkedin : [Ibrahim Saputra](https://www.linkedin.com/in/ibrahim-saputra/)
Web : [IbrhmSptra](https://ibrhmsptra.vercel.app/)

