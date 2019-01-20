import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random
from discord import Game


Client = discord.client
client = commands.Bot(command_prefix = '!')
Clientdiscord = discord.Client()


@client.event
async def on_ready():
    await client.change_presence(game=Game(name='!network;!hello;!world'))
    print('Ready, Freddy') 


@client.event
async def on_message(message):
    if ('Welcome to SaveZOne') in message.content:
       await client.delete_message(message)
    if message.content == '!network':
        await client.send_message(message.channel,'Algerie Telecome ta3 chkopi')
client.run('NTM2MzMyMjk4NTYwMjA4OTE2.DyW8jg.OWbrj_uF9vqKxA4hQsrOsHm1iNc')
