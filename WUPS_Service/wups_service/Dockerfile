#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
#HTTPS does not work for now due to TLS 1.2 requirement in the docker image
#EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["./WUPS_Service/wups_service/wups_service.csproj", "wups_service/"]
RUN dotnet restore "wups_service/wups_service.csproj"
COPY ./WUPS_Service/ .
WORKDIR "/src/wups_service"
RUN dotnet build "wups_service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "wups_service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "wups_service.dll"]