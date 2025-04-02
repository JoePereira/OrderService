
FROM mcr.microsoft.com/dotnet/sdk:8.0-nanoserver-ltsc2022 AS build

WORKDIR /source


COPY . ./dotnetcore-docs-hello-world/
WORKDIR /source/dotnetcore-docs-hello-world
RUN dotnet publish -c release -o /app


FROM mcr.microsoft.com/dotnet/aspnet:8.0-nanoserver-ltsc2022

WORKDIR /app
COPY --from=build /app ./


ENV PORT 80
EXPOSE 80

ENTRYPOINT ["dotnet", "dotnetcoresample.dll"]