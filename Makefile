dev:
	docker-compose up --build

prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

down:
	docker-compose down

clean:
	docker system prune -a