FROM python:3.10-buster

WORKDIR /app

# Atualizar o pip para a versão mais recente
RUN python --version
RUN python -m pip install --upgrade pip


# Copiar os arquivos necessários
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Expor a porta 8000
EXPOSE 8000

# Comando para iniciar a aplicação
CMD ["python", "main.py"]
